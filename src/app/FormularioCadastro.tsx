'use client'

import Error from 'next/error';
import {useState, FormEvent} from 'react'

export default function FormularioCadastro(){
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [load, setLoad]=useState(false)
    const [msg, setMsg]=useState<{txt: string; err: boolean} | null>(null)

    async function handleSubmit(ev: FormEvent){
        ev.preventDefault()
        setLoad(true)
        setMsg(null)

        try{
            const response=await fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email}),
            })

            const result=await response.json()

            if (!response.ok){
                throw new Error(result.err || 'err desconhecido')
            }

            setMsg({txt: result.message, err: false})
            setUsername("")
            setEmail("")

        } catch(err: unknown){
            setMsg( {txt: String(err), err: true})


            // setMsg({ txt: err.message, err: true})

        } finally{
            setLoad(false)
        }
    }

    return(
        <div>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                {/* Nome de usuario */}
                <label htmlFor="username">Nome de usuário</label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={ (e) => setUsername(e.target.value)}
                    required 
                />
                {/* email */}
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    required 
                />

                {/* senha */}

                <button type="submit" disabled={load}>{ load? 'enviando': 'cadastrar'}</button>

            </form>
        </div>
    )
}