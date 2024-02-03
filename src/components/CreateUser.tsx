import React, { useState, FormEvent } from 'react';

interface UserInfo {
    uid:string,
    name: string;
    email: string;
    phone_number:string
}

export const CreateUser: React.FC = () => {

    //for user detail states
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [phone_number, setphone_number] = useState<string>('');


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userInfo: UserInfo = {
            uid:id,
            name: name,
            email: email,
            phone_number:phone_number
        };

        try {
            const apiKey = 'wys_a9Z9DI33LJYQB7RGvvA3ErbMorC1cc1b9zmC';
            const response = await fetch('https://39cfa462c38b4e59bcbe5a689f31a36c.weavy.io/api/users', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            });

            if (response.ok) {
                alert('User created successfully!');
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('An error occurred while creating the user. Please try again later.');
        }
        // setSavedUserInfo(userInfo);
        setName('');
        setEmail('');
        setId('');
        setphone_number('');
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
                    <input type="tel" value={phone_number} onChange={(e) => setphone_number(e.target.value)} required/>
                </label>
                <br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};
