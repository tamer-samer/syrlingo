import { getCourses, getUnits, getUserProgress } from "@/db/queries";
import List from "./list";

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();
  const units = await getUnits();

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700 px-10 md:px-5">
        Courses
      </h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}