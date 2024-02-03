import React, {useState} from "react";

export const GetUser = () => {

    const [id, setId] = useState<string>('');
    const [user, setUser] = useState(null);

    const btnOnClick=async ()=>{
        if (!id) {
            alert('Please enter a user ID');
            return;
        }

        try {
            const apiKey = 'wys_a9Z9DI33LJYQB7RGvvA3ErbMorC1cc1b9zmC';
            const response = await fetch(`https://39cfa462c38b4e59bcbe5a689f31a36c.weavy.io/api/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`, // Replace {API-KEY} with your actual API key
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('User not found');
            }
            const userData = await response.json();
            console.log(userData);
            setUser(userData);
        } catch (error) {
            alert(error);
        }
    }

    return (
    <div>
        <h2>User Details</h2>
        <div>
            <label>User id:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} required/>
            </label>
            <p>Name:</p>
            <p>Email: </p>
            <p>Phone Number:</p>
            <button type={"submit"} onClick={btnOnClick}>Search</button>
        </div>
    </div>
    );
};