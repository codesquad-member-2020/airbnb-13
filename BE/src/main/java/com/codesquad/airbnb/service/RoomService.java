package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.repository.RoomDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomDao roomDao;

    public List<Room> findPage(int offset, int limit,
                               int adults, int children, int infants,
                               String checkIn, String checkOut,
                               int minPrice, int maxPrice) {

        return roomDao.findByCondition(offset, limit,
                adults, children, infants,
                checkIn, checkOut,
                minPrice, maxPrice);
    }

}
