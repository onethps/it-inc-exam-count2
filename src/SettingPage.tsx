import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import style from './SettingPage.module.css'

export type SettingType = {
    count: number
    setLastNumber: (value: number) => void
    setCount: (value: number) => void
    maxError: boolean
    setMaxError: (value: boolean) => void
    startError: boolean
    setStartError: (value:boolean) => void
    startNumber:number
    setStartNumber: (value:number) => void
    lastNumber: number



}

const SettingPage = (props: SettingType) => {


        const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
       let currentValue = Number(e.currentTarget.value)
            if (currentValue === props.startNumber) {
                props.setMaxError(true)
                props.setStartError(true)
            } else if (currentValue < 0 || currentValue < props.startNumber) {
                props.setMaxError(true)
            } else  {
                props.setLastNumber(currentValue)
                props.setMaxError(false)
                props.setStartError(false)
            }


        }

        const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let currentValue = Number(e.currentTarget.value)
            if (currentValue === props.lastNumber) {
                props.setMaxError(true)
                props.setStartError(true)
            } else if (currentValue < 0 || currentValue > props.lastNumber) {
                props.setStartError(true)
            } else  {
                props.setStartNumber(currentValue)
                props.setMaxError(false)
                props.setStartError(false)
            }


        }


        const onButtonHandler = () => {
            props.setLastNumber(props.lastNumber)
            props.setCount(props.startNumber)


        }


        return (
            <div className={style.mainBlock}>
                <div className={style.row}>

                    <div className={style.setValueBlock}>

                        <div>
                            <div className={style.maxValueTextStyle}>max value</div>
                            <input type="number" className={props.maxError ? style.inputErrorStyle : style.inputStyle}
                                   onChange={maxValueHandler}/>
                        </div>

                        <div>
                            <div className={style.startValueTextStyle}>start value</div>
                            <input type="number" className={props.startError ? style.inputErrorStyle : style.inputStyle}
                                   onChange={startValueHandler}/>

                        </div>

                    </div>

                    <div className={style.buttonBlock}>
                        <button className={style.setButtonStyle} disabled={props.maxError || props.startError}
                                onClick={onButtonHandler}>set
                        </button>
                    </div>


                </div>

            </div>
        );
    }
;

export default SettingPage;