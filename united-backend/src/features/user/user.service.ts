import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import {favorite} from "../../entity/favorite.entity";
import {association} from "../../entity/association.entity";
import {associationDTO} from "../association/dto/association.dto";
import {UserDto} from "./dto/userDto";
import { payment } from '../../entity/payment.entity';
import * as bcrypt from 'bcrypt';
import { subscription } from "../../entity/subscription.entity";
import { service } from "../../entity/service.entity";
import { invoice } from "../../entity/invoice.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(users) private userRepository: Repository<users>,
                @InjectRepository(favorite) private favoriteRepository: Repository<favorite>,
                @InjectRepository(association) private associationRepository: Repository<association>, 
                @InjectRepository(subscription) private subscriptionRepository: Repository<subscription>,
                @InjectRepository(payment) private paymentRepository: Repository<payment>,
                @InjectRepository(invoice) private invoiceRepository: Repository<invoice>) {}

    async getUser(userId) {
        return this.userRepository.findOne({ id: userId });
    }

    async updateUser(id: number, data: Partial<UserDto>) {
        await this.userRepository.update({ id }, data);
        return await this.userRepository.findOne({ id });
    }

    async getFavoriteAssociations(userId: number) {
        const query = this.associationRepository.createQueryBuilder('asso')
          .select('asso.id, asso.name, asso.acronym, asso.type, asso.email, asso.description, asso.address, asso.city, asso.website')
          .innerJoin(favorite, 'fav', 'fav.association_id = asso.id')
          .where("fav.user_id = :id", { id: userId});
        return await query.getRawMany();
    }

    async getSubscriptions(userId: number) {
        const query = this.subscriptionRepository.createQueryBuilder('sub')
          .select('sub.id, asso.acronym, ser.title, sub.price, sub.state, ser.price, sub.date')
          .innerJoin(service, 'ser', 'sub.service_id = ser.id ')
          .innerJoin(association, 'asso', 'ser.association_id = asso.id')
          .where("sub.user_id = :id", { id: userId});
        return await query.getRawMany();
    }

    async removeSubscription(id: number) {
        await this.subscriptionRepository.delete({ id });
        return { deleted: true };
    }

    async getInvoices(userId: number) {
        const query = this.invoiceRepository.createQueryBuilder('inv')
          .select('inv.name, asso.acronym, ser.title, sub.price, sub.date')
          .innerJoin(subscription, 'sub', 'inv.subscription_id = sub.id')
          .innerJoin(service, 'ser', 'sub.service_id = ser.id')
          .innerJoin(association, 'asso', 'ser.association_id = asso.id')
          .where("inv.user_id = :id", { id: userId});
        return await query.getRawMany();
    }

    async getUserPayment(userId) {
        return await this.paymentRepository.findOne({ where: { user_id: userId} });
    }

    async updateUserPassword(id: number, password: string) {
        const user: UserDto = await this.getUser(id);
        user.password = await bcrypt.hash(password, 10);

        await this.updateUser(id, user);
        return await this.getUser(id);
    }

    async updatePaymentInfo(id: number, data: Partial<UserDto>) {
        await this.paymentRepository.update({ id }, data);
        return await this.paymentRepository.findOne({ id });
    }
}
