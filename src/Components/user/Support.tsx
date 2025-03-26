import { Link } from "react-router-dom";
import { SupportContactsType } from "../../types/SupportContactsType";
import { BrandModel } from "../../api/data-contracts";
import { SlPhone, SlEnvolope } from "react-icons/sl";
import { PiWhatsappLogo, PiTelegramLogo } from "react-icons/pi";

export const Support = ({brandInfo} : {brandInfo: BrandModel}) => {
    // Добавляет phone как необязательное поле (после его добовления ошибок не будет)
    const brandInfoWithOptionalFields = brandInfo as BrandModel & Partial<{ phone: string }>;
    const potentialContacts: Array<SupportContactsType | null> = [
        brandInfoWithOptionalFields.whatsappId ? { href: `https://wa.me/${brandInfoWithOptionalFields.whatsappId}`, Icon: PiWhatsappLogo } : null,
        brandInfoWithOptionalFields.telegramId ? { href: `https://t.me/${brandInfoWithOptionalFields.telegramId}`, Icon: PiTelegramLogo } : null,
        brandInfoWithOptionalFields.email ? { href: `mailto:${brandInfoWithOptionalFields.email}`, Icon: SlEnvolope } : null,
        brandInfoWithOptionalFields.phone ? { href: `tel:${brandInfoWithOptionalFields.phone}`, Icon: SlPhone } : null
    ];
    
    // Фильтруем null-значения
    const contacts: Array<SupportContactsType> = potentialContacts.filter((contact): contact is SupportContactsType => contact !== null);
    return (
        <div className="flex items-center justify-center gap-[30px] pt-[20px]">
            {contacts.map(({href, Icon}, ind) => {
                return (
                    <Link key={ind} to={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="text-gray-500 w-6 h-6 hover:text-gray-900 transition-all duration-300" />
                    </Link>
                );
            })}
        </div>
    )
}