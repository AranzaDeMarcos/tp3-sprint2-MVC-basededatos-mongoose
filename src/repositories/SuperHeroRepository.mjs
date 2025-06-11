import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    // TODO: Implementar lógica de búsqueda por atributo
  return await SuperHero.find({ [atributo]: valor });
  }

  async obtenerMayoresDe30() {
    // TODO: Implementar lógica para filtrar héroes mayores de 30 años
  return await SuperHero.find({ edad: { $gt: 30 } });
  }
}

export default new SuperHeroRepository();
