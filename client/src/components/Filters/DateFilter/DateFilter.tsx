import React, { useState, Dispatch, SetStateAction } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import styled from '@emotion/styled';
import 'react-dates/lib/css/_datepicker.css';
import { useDispatch } from 'react-redux';
import { setDateFilter } from '@Action/filterAction';
import { FilterFocus } from '@Filters/Filters';
import theme from '@/style/theme';

type DateFilterFocus = {
  focus: Focus;
};

type Focus = 'startDate' | 'endDate' | null;

type DateFilterProp = {
  setFocus: Dispatch<SetStateAction<FilterFocus>>;
};

const AirBnbCalendar = ({ setFocus }: DateFilterProp) => {
  const [focused, setFocused] = useState<Focus>(null);
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const dispatch = useDispatch();
  moment.locale('ko');

  return (
    <StyledDatePickerWrapper focus={focused}>
      <DateRangePicker
        startDatePlaceholderText="체크인"
        endDatePlaceholderText="체크아웃"
        startDate={startDate}
        startDateId="sunnyElly"
        endDate={endDate}
        endDateId="ariwon"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
          if (startDate && endDate) {
            dispatch(setDateFilter(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD')));
          }
        }}
        focusedInput={focused}
        onFocusChange={focus => {
          setFocused(focus);
          setFocus({ price: false, guest: false });
        }}
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
      border: 1px solid ${theme.colors.gray};
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
          }
        }
        .DateInput_input::placeholder {
          font-size: 13px;
          color: ${theme.colors.darkGray};
          text-align: center;
          font-weight: normal;
        }
      }
    }
    .DayPicker__withBorder {
      border-radius: 1rem;
    }
    .CalendarMonthGrid {
      background: none;
    }

    .CalendarDay__default {
      border: 0;
      color: #333;
      background: #fff;
      position: relative;
      outline: none;
      z-index: 1;
    }
    .CalendarDay__default:hover {
      width: 100%;
      height: 100%;
      &:before {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #333;
        border-radius: 100%;
        content: '';
        z-index: -1;
      }
    }
    .CalendarDay__hovered_offset {
      background: #f5f5f5;
    }
    .CalendarDay__outside {
      background: none;
      color: #333;
    }
    .CalendarDay__selected_span,
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
      background: #f5f5f5;
      color: #333;
    }
    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover {
      color: #fff;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: #333;
        content: '';
        z-index: -1;
      }
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 0;
        background: #f5f5f5;
        content: '';
        z-index: -2;
      }
    }
    .CalendarDay__hovered_span {
      background: #f5f5f5;
      color: #333;
    }
    .CalendarDay__hovered_span:hover,
    .CalendarDay__hovered_span:active {
      background: none;
      color: #fff;
      &:before {
        background: #333;
        border-color: #999;
      }
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
        background: #f5f5f5;
        z-index: -2;
        content: '';
      }
    }
    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:active,
    .CalendarDay__blocked_out_of_range:hover {
      background: #fff;
      border: 0;
      color: #cacccd;
      &::before {
        display: none;
      }
    }
    .CalendarDay__selected_start {
      &:hover:before {
        border-color: #999;
      }
      &:after,
      &:hover:after {
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
      }
    }
    .CalendarDay__selected_end {
      &:hover:before {
        border-color: #999;
      }
      &:after,
      &:hover:after {
        border-color: #999;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
      }
    }
    .DayPickerNavigation_button__default,
    .DayPickerNavigation_button__default:hover,
    .DayPickerNavigation_button__default:active {
      border: 0;
      background: #fff;
    }
  }
`;
