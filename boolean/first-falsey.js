let isLogin = "";
let isAdmin = "yesAdmin";
let hasAccess = false;

hasAccess = isLogin && isAdmin;

let isGuest = false;
let isMember = true;
let isAllowed = isGuest || isMember;


console.log(hasAccess)