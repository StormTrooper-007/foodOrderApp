import React from 'react'
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog"

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
    return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
        <DialogContent>
            <h2> Dein Bestellung ist auf dem Weg! </h2>
            <p>eine Email wurde zu dir geschickt, schauen Sie deine Email nach zu bestätigen. Vielen Dank fürs Bestellen!
            </p>
        </DialogContent>
        <DialogFooter>
            <ConfirmButton onClick={() => {
                setOrders([])
                setOpenOrderDialog()
            }}>
                Ich habe noch Hunger
            </ConfirmButton>
        </DialogFooter>
    </Dialog>
    </> : <div/>
}