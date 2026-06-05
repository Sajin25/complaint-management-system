package com.cms.backend.repositories;

import com.cms.backend.models.Complaint;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ComplaintRepository extends MongoRepository<Complaint, String> {
    List<Complaint> findByCreatedBy(String createdBy);
}
