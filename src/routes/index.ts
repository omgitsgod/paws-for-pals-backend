import petRoutes from "../components/pets/petRoutes";
import userRoutes from '../components/users/userRoutes';
import favoriteRoutes from '../components/favorites/favoriteRoutes';
import shelterRoutes from "../components/shelters/shelterRoutes";

export default [...petRoutes, ...userRoutes, ...favoriteRoutes, ...shelterRoutes];