package shop.infrastructure.domain.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import shop.infrastructure.domain.model.base.BaseEntity;

@Entity
@Table(name = "ORDERITEMS")
public class OrderItem extends BaseEntity {

    private String name;
    private Double price;
    private Long quanity;
    private String shortDescription;
    private String fullDescription;
    @ManyToOne
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_ID")
    private Order order;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getQuanity() {
        return quanity;
    }

    public void setQuanity(Long quanity) {
        this.quanity = quanity;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getFullDescription() {
        return fullDescription;
    }

    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}