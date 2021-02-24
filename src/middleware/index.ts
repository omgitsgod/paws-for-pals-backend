import { handleCors, handleBodyRequestParsing, handleCompression, handleFavicon, handleSessionPassport, handleAuth, handleDB } from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression, handleFavicon, handleSessionPassport, handleAuth, handleDB];
