import Constants from '../Constatns/toFetch'


export async function getCards(cookies) {
    try {
        const authHeader = cookies.authToken    
        const res = await fetch(Constants.CARD_URL, { headers: authHeader })

        if(res.status !== 200 ) {
            throw new Error('Lista de Cards Indisponível')
        }else{
            const list = await res.json()

            return list;
        }
        
    } catch (error) {
        throw new Error('A Function GetCards encontra-se indisponível')      
    }
}

export async function createCard(card,cookies){
    try {
            const authHeader = cookies.authToken  
            
            const res = await fetch(`${Constants.CARD_URL}`, {
                headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
                method: 'POST',
                body: JSON.stringify(card)
            })

            if( res.status === 201 ){
                return await res.json()
            }
            else {
                throw new Error('Acesso Não Autorizado')
            }
                
	
    } catch (error) {
        throw new Error('A Function createCards encontra-se indisponível')
    }
}

export async function deleteCard(card, cookies){
    try {
        const authHeader = cookies.authToken    
    
        const res = await fetch(`${Constants.CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
            method: 'DELETE',
            body: JSON.stringify(card)
        })

        if( res.status === 200 ){
            return await res.json()
        }
        else {
            throw new Error('Acesso Não Autorizado')
        }
            
	
    } catch (error) {
        throw new Error('A Function delCards encontra-se indisponível')
    }
}

export async function editCard(card,cookies){
    try {
        const authHeader = cookies.authToken    
    
        const res = await fetch(`${Constants.CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
            method: 'PUT',
            body: JSON.stringify(card)
        })

        if( res.status === 200 ){
            return await res.json()
        }
        else {
            throw new Error('Acesso Não Autorizado')
        }
           
	
    } catch (error) {
        throw new Error('A Function editCards encontra-se indisponível')
    }
}

export async function changeStageCard(card,cookies){
    try {
        const authHeader = cookies.authToken  
        
        const res = await fetch(`${Constants.CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
            method: 'PUT',
            body: JSON.stringify(card)
        })

        if( res.status === 200 ){
            return await res.json()
        }
        else {
            throw new Error('Acesso Não Autorizado')
        }
          
	
    } catch (error) {
        throw new Error('Erro no pedido de alteração')
    }
}


