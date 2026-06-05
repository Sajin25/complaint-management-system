package com.cms.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "complaints")
public class Complaint {
    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private String status; // PENDING, IN_PROGRESS, RESOLVED
    private String createdBy; // User ID
    private String remarks; // Admin remarks
    private LocalDateTime createdAt;

    public Complaint() {}

    public Complaint(String title, String description, String category, String createdBy) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.status = "PENDING";
        this.createdBy = createdBy;
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }
    
    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
