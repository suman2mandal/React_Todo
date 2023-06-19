const TextAria = (params) => {
    return <>
        <textarea className="form-control col-6" placeholder="Leave a comment here" id="floatingTextarea" onChange={params.handleText} value={params.newitem} text={params.newitem}></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
    </>
}

export default TextAria;
