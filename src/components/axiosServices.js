import axios from 'axios';

const origAPI = 'http://localhost:8080/'
const login = origAPI+'login';
const signup = origAPI+'signup';
const logout = origAPI+'loggingout';
const protectedRest = origAPI+'keruusers/api/';
export const profilePic = origAPI+'keruusers/api/file/';

//* FOR LOGIN REQUEST
export async function loginRequest(loginData){
    return await axios.post(login, loginData)
        .then(res => {
            if(res.data.jwt)localStorage.setItem('user', JSON.stringify(res.data));
            return res;
        })
        .catch(err => console.log(err));
}
//* SIGNUP REQUEST
export async function signupRequest(signupData){
    return await axios.post(signup, signupData)
        .then(response => response.data);
}
//* GET CURRENT USER
export function getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
}
//* REVIEW DATE _________________________________________________________
const getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
        return 'Not yet';
    }
    if(currentDate >= endDate){
        return 'Expired';
    }
};
function expiredDate(y, m, d){
    if(d > 31){
        d = 1;
        m = m + 1; 
    }
    else if(m > 12){
        d = 1;
        m = 1;
        y = y + 1;
    }
    return y + "," + m + "," + d; 
}
const today = new Date();
const dd = parseInt(String(today.getDate()).padStart(2, '0'));
const mm = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
const yyyy = today.getFullYear();
const dateExp = expiredDate(yyyy, mm, dd+1).split(",").map(n => parseInt(n));

const reviewDate = getDates(new Date(yyyy, mm, dd), new Date(dateExp[0], dateExp[1], dateExp[2]));
if(reviewDate === 'Expired')
    signOut();
//* _______________________________________________________________________
//* SIGNOUT
export function signOut(){ 
    localStorage.removeItem('user')
}
//* ACCESS TOKEN
axios.interceptors.request.use(config => {
const user = getCurrentUser();
    if(user && user.jwt){
        const token = 'Bearer '+user.jwt;
        config.headers.Authorization = token;
    }
    return config;
})
//* FOR ADMIN REQUEST
export async function getAllData(){
    return await axios.get(protectedRest).then(res => res.data);
}
//* FOR ALL
export async function getData(uid){
    return await axios.get(protectedRest + uid).then(res => res.data);
}
//* UPDATE USER
export async function updateUser(uid, newUser){
    return await axios.put(protectedRest + uid, newUser)
        .then(res => res.data);
}
//* DELETE USER
export async function deleteUserPermanently(uid){
    return await axios.delete(protectedRest + uid);
}

//* FOR LOGOUT REQUEST
export async function loggingOut(isActive){
    return await axios.post(logout, isActive)
        .then(res => res.data);
}

//* FOR FILE UPLOADING
export async function uploadPicture(uid, filePic, option){
    return await axios.put(protectedRest + 'file/'+uid, filePic, option)
        .then(res => res.data);
}
//* GET PROFILE PICTURE
export async function getProfilePic(fileName){
    return await axios.get(protectedRest + 'file/' + fileName);
}