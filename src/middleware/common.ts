import { Router, urlencoded, json } from "express";
import cors from "cors";
import compression from "compression";
import favicon from "serve-favicon";
import path from "path";

export const handleCors = (router: Router) => router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

export const handleFavicon = (router: Router) => {
  router.use(favicon(path.join(process.cwd(), '/public', 'favicon.ico')));
};