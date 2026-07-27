import { NextResponse } from 'next/server'

interface CadastrRequest{
    username: string;
    email: string;
}

export async function POST(req: Request){
    try{
        const body: CadastrRequest=await req.json()
        const {username, email}=body

        if (!username || !email){
            return NextResponse.json(
                { error: 'Os campos user e email sao obrigatorios'},
                { status: 400} // bad request
            )

        }

        return NextResponse.json(
            {
                message: 'user criado',
                dados: {username, email}
            },
            { status: 201} // created
        )
    } catch (error){
        return NextResponse.json(
            {error: 'falha ao processar a requisicao'},
            {status: 500} // erro de servidor
        )
    }

}

