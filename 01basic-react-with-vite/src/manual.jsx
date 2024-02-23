function CustomApp(){
    return(
        <>
        <h2>Passing my brief information through components :</h2>
        <table style={{'border':'3px solid black'}}>
            <tr>
                <th style={{'border':'1px solid blue'}}>Name</th>
                <th style={{'border':'1px solid blue'}}>Mobile No:</th>
            </tr >
            
            <tr style={{'border':'1px solid blue'}}> 
                <td style={{'border':'1px solid blue'}}>Pallab</td>
                <td style={{'border':'1px solid blue'}}>9641111733</td>
            </tr>
        </table>
        <a href="https://pallab-portfolio.netlify.app/">PORTFOLIO</a>
        </>
    )
}

export default CustomApp