import {MigrationInterface, QueryRunner} from "typeorm";

export class rosie1643700036634 implements MigrationInterface {
    name = 'rosie1643700036634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`duration\` \`endDate\` int NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`invoice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(20) NOT NULL, \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP, \`userIdId\` int NULL, \`subscriptionIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`association\` ADD \`logo\` mediumblob NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`state\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD \`state\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`association\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`association\` ADD \`name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`acronym\` \`acronym\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`type\` \`type\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`description\` \`description\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`address\` \`address\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`city\` \`city\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`website\` \`website\` varchar(200) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`telephone\` \`telephone\` varchar(12) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`iban\` \`iban\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email_verified_at\` \`email_verified_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_143bae860ce1bae7a8532627122\``);
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_05444190acb50a244174dc70e01\``);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`associationIdId\` \`associationIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` DROP FOREIGN KEY \`FK_735db187ef67b85845cdf4c2bf3\``);
        await queryRunner.query(`ALTER TABLE \`ticket\` DROP FOREIGN KEY \`FK_12e3d08fe1242623310ecffb3b1\``);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`subject\` \`subject\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`comment\` \`comment\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`pickup_date\` \`pickup_date\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`resolved_date\` \`resolved_date\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`supportIdId\` \`supportIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_8599227b7e110597f53a1f34762\``);
        await queryRunner.query(`ALTER TABLE \`image\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`image\` CHANGE \`ticketIdId\` \`ticketIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_5e27aa5c530447ca6eecca4967b\``);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`description\` \`description\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`price\` \`price\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`associationIdId\` \`associationIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_76f954b0122c58a298dc4f4d9d6\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_632356bdd9bafd8079c702fcdc9\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`price\` \`price\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP COLUMN \`endDate\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD \`endDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`serviceIdId\` \`serviceIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`password_reset\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_3dd21505bf38aeefe2e7fe6d404\``);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`created_at\` \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` DROP FOREIGN KEY \`FK_800fa0245f8e60c1e87c8e38492\``);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` DROP FOREIGN KEY \`FK_f18be16b5e5e4b20976cfd4e218\``);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`comment\` \`comment\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`ticketIdId\` \`ticketIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_143bae860ce1bae7a8532627122\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_05444190acb50a244174dc70e01\` FOREIGN KEY (\`associationIdId\`) REFERENCES \`association\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket\` ADD CONSTRAINT \`FK_735db187ef67b85845cdf4c2bf3\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket\` ADD CONSTRAINT \`FK_12e3d08fe1242623310ecffb3b1\` FOREIGN KEY (\`supportIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_8599227b7e110597f53a1f34762\` FOREIGN KEY (\`ticketIdId\`) REFERENCES \`ticket\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_5e27aa5c530447ca6eecca4967b\` FOREIGN KEY (\`associationIdId\`) REFERENCES \`association\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_76f954b0122c58a298dc4f4d9d6\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_632356bdd9bafd8079c702fcdc9\` FOREIGN KEY (\`serviceIdId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoice\` ADD CONSTRAINT \`FK_cffa84a299d766cf5f5d56a1f0f\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoice\` ADD CONSTRAINT \`FK_ff4d5f0217f90e1f754110b427e\` FOREIGN KEY (\`subscriptionIdId\`) REFERENCES \`subscription\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_3dd21505bf38aeefe2e7fe6d404\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` ADD CONSTRAINT \`FK_800fa0245f8e60c1e87c8e38492\` FOREIGN KEY (\`ticketIdId\`) REFERENCES \`ticket\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` ADD CONSTRAINT \`FK_f18be16b5e5e4b20976cfd4e218\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` DROP FOREIGN KEY \`FK_f18be16b5e5e4b20976cfd4e218\``);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` DROP FOREIGN KEY \`FK_800fa0245f8e60c1e87c8e38492\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_3dd21505bf38aeefe2e7fe6d404\``);
        await queryRunner.query(`ALTER TABLE \`invoice\` DROP FOREIGN KEY \`FK_ff4d5f0217f90e1f754110b427e\``);
        await queryRunner.query(`ALTER TABLE \`invoice\` DROP FOREIGN KEY \`FK_cffa84a299d766cf5f5d56a1f0f\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_632356bdd9bafd8079c702fcdc9\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_76f954b0122c58a298dc4f4d9d6\``);
        await queryRunner.query(`ALTER TABLE \`service\` DROP FOREIGN KEY \`FK_5e27aa5c530447ca6eecca4967b\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_8599227b7e110597f53a1f34762\``);
        await queryRunner.query(`ALTER TABLE \`ticket\` DROP FOREIGN KEY \`FK_12e3d08fe1242623310ecffb3b1\``);
        await queryRunner.query(`ALTER TABLE \`ticket\` DROP FOREIGN KEY \`FK_735db187ef67b85845cdf4c2bf3\``);
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_05444190acb50a244174dc70e01\``);
        await queryRunner.query(`ALTER TABLE \`favorite\` DROP FOREIGN KEY \`FK_143bae860ce1bae7a8532627122\``);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`ticketIdId\` \`ticketIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` CHANGE \`comment\` \`comment\` varchar(500) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` ADD CONSTRAINT \`FK_f18be16b5e5e4b20976cfd4e218\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket_responses\` ADD CONSTRAINT \`FK_800fa0245f8e60c1e87c8e38492\` FOREIGN KEY (\`ticketIdId\`) REFERENCES \`ticket\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payment\` CHANGE \`created_at\` \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_3dd21505bf38aeefe2e7fe6d404\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`password_reset\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`serviceIdId\` \`serviceIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP COLUMN \`endDate\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD \`endDate\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`price\` \`price\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_632356bdd9bafd8079c702fcdc9\` FOREIGN KEY (\`serviceIdId\`) REFERENCES \`service\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_76f954b0122c58a298dc4f4d9d6\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`associationIdId\` \`associationIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`price\` \`price\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`description\` \`description\` varchar(500) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`service\` ADD CONSTRAINT \`FK_5e27aa5c530447ca6eecca4967b\` FOREIGN KEY (\`associationIdId\`) REFERENCES \`association\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`image\` CHANGE \`ticketIdId\` \`ticketIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`image\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_8599227b7e110597f53a1f34762\` FOREIGN KEY (\`ticketIdId\`) REFERENCES \`ticket\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`supportIdId\` \`supportIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`resolved_date\` \`resolved_date\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`pickup_date\` \`pickup_date\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`comment\` \`comment\` varchar(500) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` CHANGE \`subject\` \`subject\` varchar(100) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ticket\` ADD CONSTRAINT \`FK_12e3d08fe1242623310ecffb3b1\` FOREIGN KEY (\`supportIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ticket\` ADD CONSTRAINT \`FK_735db187ef67b85845cdf4c2bf3\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`associationIdId\` \`associationIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`userIdId\` \`userIdId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`favorite\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_05444190acb50a244174dc70e01\` FOREIGN KEY (\`associationIdId\`) REFERENCES \`association\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`favorite\` ADD CONSTRAINT \`FK_143bae860ce1bae7a8532627122\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`email_verified_at\` \`email_verified_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`created_at\` \`created_at\` datetime NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`user_id\` \`user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`iban\` \`iban\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`telephone\` \`telephone\` varchar(12) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`website\` \`website\` varchar(200) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`city\` \`city\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`address\` \`address\` varchar(100) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`description\` \`description\` varchar(200) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`type\` \`type\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` CHANGE \`acronym\` \`acronym\` varchar(10) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`association\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`association\` ADD \`name\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`association\` DROP COLUMN \`logo\``);
        await queryRunner.query(`DROP TABLE \`invoice\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` CHANGE \`endDate\` \`duration\` int NOT NULL`);
    }

}
