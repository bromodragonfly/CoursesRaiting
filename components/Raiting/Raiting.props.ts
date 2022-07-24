import {  DetailedHTMLProps, HTMLAttributes, ReactFragment, ReactNode, } from "react";


export interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditible? : boolean
    raiting: number
    setRaiting?: (raiting: number) => void
}