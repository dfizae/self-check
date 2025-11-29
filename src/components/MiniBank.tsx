import { useReducer, useState } from "react";
import { BankReducer, initialState } from "../reducer/BankReducer";

export default function MiniBank() {
    //useState 훅: 입력창 관리용
    const [amount, setAmount] = useState(0);
    const [state, dispatch] = useReducer(BankReducer ,initialState)

    // 
    const handleDeposit = () => {
    if (amount <= 0) return; // 0원 이하는 무시
    dispatch({ type: 'DEPOSIT', payload: amount });
    setAmount(0); // 입력창 비우기
  };

    const handleWithdraw = () => {
      if (amount <= 0) return;
      dispatch({ type: 'WITHDRAW', payload: amount });
      setAmount(0);
    };
    

    return(
        <div>
            <h1>은행 계좌</h1>
            <h2>잔액: {state.balance.toLocaleString()}원</h2>
            {state.error && <p style={{ color: 'red' }}>🚨 {state.error}</p>}
            
            <div>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="금액 입력"/>
                    <button onClick={handleDeposit}>입금</button>
                    <button onClick={handleWithdraw}>출금</button>
                    <button onClick={() => dispatch({type: "RESET"})}>초기화</button>
            </div>    
            
            <hr/>
            <h3>거래 내역</h3>
            <ul>
                {state.history.map((item) => (
                    <li key={item.id}>
                        [{item.date}] {item.type} : {item.amount.toLocaleString()}원
                    </li>
                ))}
            </ul>
        </div>
    );
};
