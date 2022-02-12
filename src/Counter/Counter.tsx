import React, {useState} from "react";
import style from './Counter.module.css'

type countType = {
    count: number
    setCount: (on: number) => void
    maxError: boolean
    startError: boolean
    lastNumber: number
    setStartNumber: (value:number) => void
    setLastNumber: (value:number) => void

}


export const Counter = (props: countType) => {


    // const styleLastNumber = props.count === props.lastNumber ? style.styleLastNumber : style.staticNumber
    const addCount = () => props.setCount(props.count + 1)
    const resetCount = () => {
        props.setCount(0)
        props.setStartNumber(0)
        props.setLastNumber (0)
    }

    return (
        <div className={style.mainBox}>
            <div className={style.row}>


                {props.maxError || props.startError ? <div className={style.styleTextErrors}>incorrect value</div> :
                    props.count ? <div className={style.defaultStyleText}>{props.count}</div> :
                        <div className={style.defaultStyleText}>enter values </div>}

                {/*{!props.count ? <div>enter value and set</div> :*/}
                {/*    props.maxError || props.startError ? <div className={style.styleTextErrors}>incorrect value</div> : <div>{props.count}</div>}*/}


                {/*{ props.count || props.lastNumber !== 0 && <div className={styleLastNumber}>{props.count}</div>   }*/}

                {/*{ props.count || props.lastNumber === 0 && <div className={style.styleTextErrors}>{showText}</div>  }*/}


                <div className={style.buttonBlock}>
                    <button className={style.btnInc} disabled={!props.count || props.count === props.lastNumber}
                            onClick={addCount}>inc
                    </button>
                    <button className={style.btnReset} disabled={!props.count} onClick={resetCount}>reset</button>
                </div>

            </div>
        </div>

    )
}