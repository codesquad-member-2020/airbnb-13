package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Room> findPage(int offset, int limit) {

        List<Room> rooms = roomRepository.findByOffset(offset, limit);

        rooms.stream().map(room -> {
            if (room.getSuperHost()) {
                room.setDiscountedPrice((int) (room.getPrice() * 0.9));
            }
            return room;
        }).collect(Collectors.toList());

        return rooms;
    }
}
