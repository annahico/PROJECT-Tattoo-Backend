"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const galleriesControler_1 = require("../controllers/galleriesControler");
const auth_1 = require("../middlewares/auth");
const admin_1 = require("../middlewares/admin");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/create', auth_1.auth, admin_1.admin, galleriesControler_1.createImage);
router.post('/update/:id', auth_1.auth, admin_1.admin, galleriesControler_1.updateImageById);
router.delete('/delete', auth_1.auth, admin_1.admin, galleriesControler_1.deleteImageByTattooArtistId);
router.get('/all', galleriesControler_1.getAllGallery);
