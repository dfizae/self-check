import type { Dispatch, SetStateAction } from "react";
import type { User } from "../types/User";

export default function UserProfile({user, setUser}: {user: User; setUser: Dispatch<SetStateAction<User>>}) {
    
    
    return(
        <>
            <div className="wrap">
                <h1>사용자 정보 입력</h1>
                <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
                <input type="number" value={user.age} onChange={(e) => setUser({...user, age: parseFloat(e.target.value)})}/>
                <label>
                    구독여부
                    <input type="checkbox" checked={user.isSubscribed} onChange={(e) => setUser({...user, isSubscribed: e.target.checked})} />
                </label>
                <p>이름: {user.name} 나이: {user.age} 구독여부: {user.isSubscribed ? '구독중': '미구독'}</p>
            </div>
        </>
    );
};
