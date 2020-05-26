import React, { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import styled from '@emotion/styled';
import 'react-dates/lib/css/_datepicker.css';

type DateFilterFocus = {
  focus: Focus;
};

type Focus = 'startDate' | 'endDate' | null;

const StyledDatePickerWrapper = styled.div`
  & {
    width: 200px;
    height: 40px;
    font-size: 12px;
    * {
      box-sizing: border-box;
    }
    .DateRangePickerInput {
      display: flex;
      width: 100%;
      height: 40px;
      align-items: center;
      border-radius: 1.5rem;
      ${(props: DateFilterFocus) => props.focus && `border: 2px solid #000`};
      .DateInput {
        width: 50%;
        height: 40px;
        display: flex;
        background: none;
        .DateInput_input {
          cursor: pointer;
          font-size: 13px;
          color: #000;
          padding: 0;
          background: none;
          border-bottom: 0;
          text-align: center;
          &.DateInput_input__focused {
            .DateRangePickerInput {
              border: 2px solid #000;
            }
            &,
            &::placeholder {
              font-weight: bold;
            }
          }
        }
        .DateInput_input::placeholder {
          font-size: 13px;
          color: #000;
          text-align: center;
        }
      }
    }

    .CalendarDay__default {
      border: 0;
      color: #333;
      background: #fff;
      position: relative;
    }
    .CalendarDay__default:hover {
      width: 100%;
      height: 100%;
      color: inherit;
      &:after {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #333;
        border-radius: 100%;
        content: '';
      }
    }
    .CalendarDay__hovered_offset {
      background: #f5f5f5;
      border: 0;
      color: inherit;
    }
    .CalendarDay__outside {
      border: 0;
      background: none;
      color: #333;
    }
    .CalendarDay__selected_span {
      background: #f5f5f5;
      border: 0;
      color: #333;
    }
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
      background: #f5f5f5;
      border: 0;
      color: #333;
    }
    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover {
      background: #333;
      border: 0;
      color: #fff;
      border-radius: 100%;
    }
    .CalendarDay__hovered_span,
    .CalendarDay__hovered_span:hover {
      background: #f5f5f5;
      border: 0;
      color: #333;
    }
    .CalendarDay__hovered_span:active {
      background: #333;
      border: 0;
      color: #fff;
    }
    .CalendarDay__blocked_calendar,
    .CalendarDay__blocked_calendar:active,
    .CalendarDay__blocked_calendar:hover {
      background: #cacccd;
      border: 1px solid #cacccd;
      color: #82888a;
    }
    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:active,
    .CalendarDay__blocked_out_of_range:hover {
      background: #fff;
      border: 0;
      color: #cacccd;
    }
  }
`;

const AirBnbCalendar = () => {
  const [focused, setFocused] = useState<Focus>(null);
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  moment.locale('ko');
  return (
    <StyledDatePickerWrapper focus={focused}>
      <DateRangePicker
        startDatePlaceholderText="체크인"
        endDatePlaceholderText="체크아웃"
        startDate={startDate}
        startDateId="213242dfefsdve"
        endDate={endDate}
        endDateId="er32aesdfvder"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focused}
        onFocusChange={focus => setFocused(focus)}
        monthFormat="YYYY[년] MMMM"
        showClearDates
        readOnly={true}
        displayFormat="MMM D[일]"
        customArrowIcon={<span>-</span>}
        daySize={50}
      />
    </StyledDatePickerWrapper>
  );
};

export default AirBnbCalendar;
