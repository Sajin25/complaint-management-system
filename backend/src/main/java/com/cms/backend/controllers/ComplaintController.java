package com.cms.backend.controllers;

import com.cms.backend.models.Complaint;
import com.cms.backend.repositories.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ComplaintController {

    @Autowired
    private ComplaintRepository complaintRepository;

    @PostMapping
    public ResponseEntity<?> createComplaint(@RequestBody Complaint complaint) {
        Complaint saved = complaintRepository.save(new Complaint(
                complaint.getTitle(),
                complaint.getDescription(),
                complaint.getCategory(),
                complaint.getCreatedBy()
        ));
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Complaint>> getAllComplaints() {
        return ResponseEntity.ok(complaintRepository.findAll());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Complaint>> getUserComplaints(@PathVariable String userId) {
        return ResponseEntity.ok(complaintRepository.findByCreatedBy(userId));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatusAndRemarks(@PathVariable String id, @RequestBody Complaint updateData) {
        Optional<Complaint> optional = complaintRepository.findById(id);
        if (optional.isPresent()) {
            Complaint complaint = optional.get();
            if (updateData.getStatus() != null) complaint.setStatus(updateData.getStatus());
            if (updateData.getRemarks() != null) complaint.setRemarks(updateData.getRemarks());
            return ResponseEntity.ok(complaintRepository.save(complaint));
        }
        return ResponseEntity.notFound().build();
    }
}
