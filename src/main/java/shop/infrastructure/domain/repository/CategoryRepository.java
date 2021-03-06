package shop.infrastructure.domain.repository;

import org.springframework.stereotype.Repository;
import shop.infrastructure.domain.model.Category;
import shop.infrastructure.domain.repository.base.BaseRepository;

@Repository
public interface CategoryRepository extends BaseRepository<Category, Long> {
}
