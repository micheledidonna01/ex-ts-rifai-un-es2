import { useState, useRef } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function HomePage(){

    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const specializzazione= useRef<HTMLSelectElement>(null);
    const anniEsperienza= useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState<string>("");

    const letters : string[] = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers : string[] = "0123456789".split("");
    const symbols : string[]= ("!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~").split("");
    
    const isValidName: boolean = name !== "";
    const isValidUsername: boolean = username !== "" && username.length > 5;
    const usernameWithoutSymbols: boolean = username.split("").every((char) => !symbols.includes(char));
    const usernameWithoutSpaces: boolean = username.split("").every((char) => !" ".includes(char));
    const isValidPass: boolean = password !== "" && password.length >= 8;
    const passWithSomeLetterAndNumberandSymbols: boolean = password.split("").some((char) => letters.includes(char)) && 
                                                password.split("").some((char) => numbers.includes(char)) && 
                                                password.split("").some((char) => symbols.includes(char));
    const isValidAnniEsperienza: boolean = anniEsperienza >= 0;
    const isValidDesc: boolean = description !== "" && description.trim().length >= 10 && description.trim().length <= 100;
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();


        if(isValidName &&
            isValidUsername && usernameWithoutSpaces && usernameWithoutSymbols &&
            isValidPass && passWithSomeLetterAndNumberandSymbols &&
            isValidAnniEsperienza && 
            isValidDesc
        ){
            console.log(
                `
                nome: ${name}
                username: ${username}
                password: ${password}
                specializzazione: ${specializzazione.current?.value}
                anniDiEsperienza: ${anniEsperienza}
                desc: ${description}
                
                `
            )
        }
        
    }

    function handleReset(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        setName("");
        setUsername("");
        anniEsperienza.current!.value = "";
        specializzazione.current!.value = "";
        setPassword("");
        setDescription("");
    }


    return <>
    
        <div className="container my-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white fw-semibold">
                    ✉️ Register
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        {isValidName ? name.length > 0 ? <p className="text-success">✅</p> : <p className="text-danger">❌</p>: null}

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label"> Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="mick01"
                                required
                                />
                                {isValidUsername ? <p className="text-success">✅</p> : null}
                                {!usernameWithoutSpaces ? <p className="text-danger">non ci devono essere spazi❌</p> : null}
                                {!usernameWithoutSymbols ? <p className="text-danger">non ci devono essere simboli❌</p> : null}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pass"
                                name="pass"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            
                            {password.length > 0  ? !passWithSomeLetterAndNumberandSymbols ? <p className="text-danger">❌La password deve contenere almeno una lettera, un numero e un simbolo</p> : <p className="text-success">✅</p> : null}

                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="specializzazione" className="form-label">Specializzazione</label>
                            <select
                                className="form-control"
                                id="specializzazione"
                                name="specializzazione"
                                ref={specializzazione}
                                required
                            >
                                <option value="">---</option>
                                {["Full Stack", "Frontend", "Backend"].map((o, i) => (
                                    <option key={i} value={o.toLocaleLowerCase().replaceAll(" ", "")}>{o}</option>
                                ))}
                            </select>
                            
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="anniEsperienza" className="form-label">Anni Esperienza:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="anniEsperienza"
                                name="anniEsperienza"
                                min={0}
                                max={10}
                                ref={anniEsperienza}
                                required
                                
                            />
                            {/* {anniEsperienza.current.value !== 0 ? isValidAnniEsperienza ? <p className="text-success">✅</p> : <p className="text-danger">Non può contenere un numero negativo❌</p> : null} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                            {description.length > 0 ? !isValidDesc ? <p className="text-danger">❌ La descrizione deve contenere dai 10 a 100 caratteri</p> : <p className="text-success">✅</p> : null}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Send Candidature
                        </button>
                        <button type="submit" onClick={handleReset} className="btn btn-secondary w-100">
                            Reset
                        </button>

                    </form>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <div className="mt-5">
                <i className="bi bi-arrow-up bg-primary p-3 fs-2" onClick={goToStartForm}></i>
            </div>
        </div>

    </>
}