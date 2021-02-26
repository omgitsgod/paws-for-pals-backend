import { handleCors, handleBodyRequestParsing, handleCompression, handleFavicon, handleSessionPassport, handleAuth, handleDB } from "./common";

export default [handleBodyRequestParsing, handleCompression, handleFavicon, handleSessionPassport, handleCors, handleAuth, handleDB];
