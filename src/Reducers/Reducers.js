import loginReducer from "./LoginReducer";
import navReducer from "./NavReducer";
import localeReducer  from "./LocaleReducer"
export default {
    loginHolder: loginReducer,
    navStateHolder:navReducer,
    localeStateHolder:localeReducer
};
