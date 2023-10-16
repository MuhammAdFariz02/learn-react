function MyButton({
    children
}){
    const test = 0.1 + 0.2 == 0.3 ? "benar cuy" : "apasih JS";

    return (
        <button>
            {children}
            <br/>
            {test}
        </button>  
    );
}

export default MyButton