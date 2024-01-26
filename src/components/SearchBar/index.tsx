import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const DivInput = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    width: 98%;
    height: 2.5rem;
    padding-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0 0 8px #DDD;
    display: flex;
    align-items: center;
`

const DivResult = styled.div`
`

const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    margin-left: 5px;
    font-size: 1.25rem;

    &:focus {
        outline: none;
    }
`

interface Props {
    url: string,
    data?: Array<any>
}


function SearchBar ({url}: Props) {
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (search !== '') {
                fetch(`${url}/${search}`)
                    .then(response => response.json())
                    .then(
                        (data) => {
                            console.log(data)
                            setResult(data)
                        },
                        (error) => {
                            console.log("error")
                            console.log(error)
                        }
                    )
            }
        }, 500); // delay of 500ms

        return () => clearTimeout(timeoutId); // this will clear the timeout if the search value changes before the delay ends
    }, [search, url])

    return (
    <div>
        <DivInput>
            <FaSearch />
            <Input type="text" placeholder="Digite sua pesquisa" value={search} onChange={handleSearch} />
        </DivInput>
        <DivResult>
            {result.map((item: any, index: number) => (
                <p key={index}>{item.name}</p>
            ))}
        </DivResult>
    </div>
    )
}

export default SearchBar