import { handleCors, handleBodyRequestParsing, handleCompression, handleFavicon, handleRedis, handleSession, handlePassport, handleAuth, handleDB } from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression, handleFavicon, handleRedis, handleSession, handlePassport, handleAuth, handleDB];
