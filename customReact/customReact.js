const container = document.getElementById("root")

const customElement ={
    type : "a",
    props :{
        href :"https://pallab-portfolio.netlify.app/",
        target:  "_main" 
    },
    children:"visit my portfolio"
}

const customRender=(customElement,whereToInject)=>{
    const element = document.createElement(customElement.type);
    element.innerHTML =  customElement.children;
    for(let prop in customElement.props){
        element.setAttribute(prop,customElement.props[prop]);
    }

    whereToInject.appendChild(element);
}

customRender(customElement,container);

