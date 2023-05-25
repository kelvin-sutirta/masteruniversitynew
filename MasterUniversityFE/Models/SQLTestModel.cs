namespace MasterUniversityFE.Models
{
    public class SQLTestModel
    {
        public int TestCases { get; set; }
    }
    public class TestResult
    {
        public int Hours { get; set; }
        public int Minutes { get; set; }
        public int Seconds { get; set; }
        public int MiliSeconds { get; set; }
        public int DataProcessed { get; set; }
        public string AverageTime { get; set; }

    }

}
