export const Model = (() => {
    const userNum = 20;
    const getPersonData = () =>  // get user's data
        fetch(`https://randomuser.me/api?results=${userNum}`)
        .then(function(response){
            return  response.json();
        })
        return{
            getPersonData
        }
})();