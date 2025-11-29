import type { BankAction } from "../types/BankAction";

export interface Transaction {
    id: number;
    type: '입금' | '출금';
    amount: number;
    date: string;
}

export interface BankState {
    balance: number;
    error: string|null;
    history: Transaction[];
}

export const initialState: BankState = {
    balance: 0,  //현재 잔액
    error: null, //에러 메세지
    history: []  //거래 내역 배열
} 

export function BankReducer(state: BankState, action: BankAction) {
    switch (action.type) {
        case 'DEPOSIT': {
            const newTransaction : Transaction = {
                    id: Date.now(),
                    type: '입금',
                    amount: action.payload,
                    date: new Date().toLocaleDateString()
                };
            return{
                ...state,
                balance: state.balance + action.payload,
                error: null,
                // 기존 내역(...state.history) 뒤에 새 내역(newTransaction)을 붙입니다.
                history: [...state.history, newTransaction]
            };
        }    
        case 'WITHDRAW': {
            const newTransaction : Transaction = {
                 id: Date.now(),
                    type: '출금',
                    amount: action.payload,
                    date: new Date().toLocaleDateString()
            }
            if(state.balance < action.payload){
                alert("입력한 출금액이 잔액보다 높습니다!");
                return {
                    ...state,
                    error: "잔액이 부족합니다."
                }
            } else{
                return {
                    ...state,
                    balance: state.balance - action.payload,
                    error: null,
                    history: [...state.history, newTransaction]
                }
            }
        }

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}