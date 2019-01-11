package Income.vo;

public class masterVO 
{
	int id;
	String ApplicationName;
	String ApplicantName;
	String DateofSubmit;
	String Status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getApplicationName() {
		return ApplicationName;
	}
	public void setApplicationName(String applicationName) {
		ApplicationName = applicationName;
	}
	public String getApplicantName() {
		return ApplicantName;
	}
	public void setApplicantName(String applicantName) {
		ApplicantName = applicantName;
	}
	public String getDateofSubmit() {
		return DateofSubmit;
	}
	public void setDateofSubmit(String dateofSubmit) {
		DateofSubmit = dateofSubmit;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
}