package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Room> findPage(int offset, int limit) {

        return roomRepository.findByOffset(offset, limit);
    }
}
