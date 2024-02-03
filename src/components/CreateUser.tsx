import React, { useState, FormEvent } from 'react';

interface UserInfo {
    id:string,
    name: string;
    email: string;
    tel:string
}

export const CreateUser: React.FC = () => {

    //for user detail states
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [tel, setTel] = useState<string>('');


    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const userInfo: UserInfo = {
            id:id,
            name: name,
            email: email,
            tel:tel
        };
        // setSavedUserInfo(userInfo);
        setName('');
        setEmail('');
        setId('');
        setTel('');
    };

    return (
        <div>
            <h2>Save User Information</h2>
            <form onSubmit={handleSubmit}>
                <label>User id:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required/>
                </label>
                <br/>
                <label>Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <br/>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <br/>
                <label>Contact:
                    <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} required/>
                </label>
                <br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
