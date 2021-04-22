import petRoutes from "../components/pets/petRoutes";
import userRoutes from '../components/users/userRoutes';
import favoriteRoutes from '../components/favorites/favoriteRoutes';

export default [...petRoutes, ...userRoutes, ...favoriteRoutes];