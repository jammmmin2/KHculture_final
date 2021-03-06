package com.kh.khculture.management.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.kh.khculture.lecture.model.vo.Instructor;
import com.kh.khculture.lecture.model.vo.Lecture;
import com.kh.khculture.management.model.vo.Lecture2;
import com.kh.khculture.management.model.vo.LectureOpen2;
import com.kh.khculture.management.model.vo.LectureOpen3;
import com.kh.khculture.management.model.vo.SearchBoard;
import com.kh.khculture.management.model.vo.SearchInstructor;

@Mapper
public interface ManagementMapper {
	
	int registLecture(Lecture lecture);

	int getListCount(SearchBoard search);

	int deleteLecture(int lNo);

	Lecture selectLecture(int lNo);

	int updateLecture(Lecture lecture);
	
	List<Lecture> selectAllLectureList();

	List<Instructor> selectInstructor(SearchInstructor searchInstructor);

	int registLectureOpen(LectureOpen2 lectureOpen);

	List<LectureOpen3> selectOpenList(int startRow, int endRow);

	LectureOpen2 selectOneOpen(int lrNo);

	int updateOpen(LectureOpen2 lectureOpen);

	int deleteProcedure(int lNo);

	int deleteOpenProcedure(int lrNo);

	int deleteOpen(int lrNo);

	List<Lecture2> selectLectureList(SearchBoard search);

	int getOpenListCount(SearchBoard search);

	List<LectureOpen3> selectOpenList(SearchBoard search);
}
