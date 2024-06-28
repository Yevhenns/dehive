import Image from "next/image"
import { LogoText } from "../LogoText/LogoText"

export function Logo() {
    return (<div><Image src='/logoMobile.png' width={29} height={32} alt="logo" />
        <Image src='/logoFull.png' width={53} height={58} alt="logo" />
        <LogoText /></div>)
}