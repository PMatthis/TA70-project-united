import "./PayementInfo.css"
import { Button } from "primereact/button"
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';

function PayementInfo({ setActiveIndex }) {
    const [typePayement, setTypePayement] = useState(0);
    const [ownerAccount, setOwnerAccount] = useState("");
    const [adress, setAdress] = useState("");
    const [postCode, setPostCode] = useState(undefined);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(undefined);
    const [secretCode, setSecretCode] = useState(undefined);
    const [iban, setIban] = useState(undefined);
    const [cardNumber, setCardNumber] = useState(undefined);
    const [ownerCard, setOwnerCard] = useState(undefined);

    return (
        <div>
            <div className="flex align-items-center justify-content-center my-2">
                <RadioButton inputId="tranfert" value="0" name="Virement banquaire" onChange={(e) => setTypePayement(e.value)} checked={typePayement == 0} />
                <label htmlFor="tranfert" className="text-white perso-bd-color-blue border-round border-1 pl-1 pr-8 py-1 ml-2 w-7">
                    Virement banquaire
                </label>
            </div> 
            {typePayement == 0 ? //by direct debit ?
                <div className="flex grid justify-content-center w-7 m-auto pl-5">
                    <span className="p-float-label col-12">
                        <InputText className="flex justify-content-center" id="inOwner" value={ownerAccount} onChange={(e) => setOwnerAccount(e.target.value)}/>
                        <label htmlFor="inOwner">Titulaire du compte</label>
                    </span>
                    
                    <span className="p-float-label col-5">
                        <InputText id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                        <label htmlFor="adress">Adresse</label>
                    </span>
                    <span className="flex flex-column col-3">
                        <label className="text-600 text-xs" htmlFor="postCode">Code postal</label>
                        <InputMask id="postCode" mask="99 999" placeholder="__ ___" value={postCode} onChange={(e) => setPostCode(e.target.value)}></InputMask>
                    </span>
                    <span className="p-float-label col-4">
                        <InputText id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                        <label htmlFor="city">Ville</label>
                    </span>      
                    <span className="p-float-label col-12">
                        <InputText id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                        <label htmlFor="country">Pays</label>
                    </span>  
                    <span className="flex flex-column col-12">
                        <label className="text-600 text-xs" htmlFor="IBAN">IBAN</label>
                        <InputMask id="IBAN" mask="aaaa aaaa aaaa aaaa aaaa aaaaaaa" value={iban} onChange={(e) => setIban(e.value)} placeholder="FRxx xxxx xxxx xxxx xxxx xxxxxxx"></InputMask>
                    </span>         
                </div>         
            :
                <div></div>
            }

            <div className="flex align-items-center justify-content-center my-2">
                <RadioButton inputId="creditCard" value="1" name="Carte banquaire" onChange={(e) => setTypePayement(e.value)} checked={typePayement == 1} />
                <label htmlFor="creditCard" className="text-white perso-bd-color-blue border-round border-1 pl-1 pr-8 py-1 ml-2 w-7">
                    Carte banquaire
                </label>
            </div>
            {typePayement==1 ? //credit card ?
                <div className="flex grid justify-content-center w-7 m-auto pl-5">
                    <span className="p-float-label col-7">
                        <InputText className="flex justify-content-center" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                        <label htmlFor="cardNumber">Numéro de carte</label>
                    </span>
                    <span className="p-float-label col-5">
                        <InputText id="ownerCard" value={ownerCard} onChange={(e) => setOwnerCard(e.target.value)} />
                        <label htmlFor="ownerCard">Nom</label>
                    </span>
                    
                    <div className="flex flex-column col-6">
                        <label className="text-600 text-xs" htmlFor="date">Date d'expiration</label>
                        <Calendar id="date" value={date} onChange={(e) => setDate(e.value)} showIcon view="month" dateFormat="mm/yy" yearNavigator yearRange="2022:2100" mask="99/9999"/>
                    </div>

                    <span className="flex flex-column col-6 px-8">
                        <label className="text-600 text-xs" htmlFor="sercretCode">Code à 3 chiffres</label>
                        <InputMask id="sercretCode" mask="999" value={secretCode} onChange={(e) => setSecretCode(e.value)} placeholder="___"></InputMask>
                    </span>      
                </div>
            :
                <div></div>
            }

            <span className="flex p-buttonset justify-content-center mb-4 mt-2">
                <Button label="Précédent" className="perso-color-blue" onClick={() => setActiveIndex(1)} />
                <Button label="Suivant" className="perso-color-blue" onClick={() => setActiveIndex(3)} />
            </span>
        </div>
    );
}

export default PayementInfo;