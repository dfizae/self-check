export type BankAction =
| {type: 'DEPOSIT'; payload: number}
| {type: 'WITHDRAW'; payload: number}
| {type: 'RESET'}