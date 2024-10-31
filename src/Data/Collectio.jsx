export let data = {
  header: "Patient Appointments",
  appointments: [
    {
      id: 1,
      name: "John Doe",
      reason: "Check-up",
      date: "2023-10-01",
      status: true, // Scheduled
      completed: false,
      description:
        "Routine annual check-up. The patient will undergo a series of tests including blood work, blood pressure measurement, and a general physical examination to ensure overall health and well-being.",
    },
    {
      id: 2,
      name: "Jane Smith",
      reason: "Consultation",
      date: "2023-10-02",
      status: true, // Completed
      completed: true,
      description:
        "Initial consultation for new symptoms. The patient reported experiencing persistent headaches and fatigue. A detailed discussion and preliminary tests were conducted to determine the underlying cause.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      reason: "Follow-up",
      date: "2023-10-03",
      status: true, // Scheduled
      completed: false,
      description:
        "Follow-up appointment after surgery. The patient had a minor surgical procedure two weeks ago and this appointment is to monitor the healing process and address any post-operative concerns.",
    },
    {
      id: 4,
      name: "Bob Brown",
      reason: "Routine Check",
      date: "2023-10-04",
      status: false, // Cancelled
      completed: false,
      description:
        "Routine check-up, cancelled by patient. The patient was scheduled for a routine health check but had to cancel due to a personal emergency. The appointment will be rescheduled at a later date.",
    },
    {
      id: 5,
      name: "Charlie Davis",
      reason: "Therapy Session",
      date: "2023-10-05",
      status: true, // Scheduled
      completed: false,
      description:
        "Weekly therapy session. The patient is undergoing therapy for anxiety and depression. This session will focus on cognitive-behavioral techniques and progress assessment.",
    },
    {
      id: 6,
      name: "Diana Evans",
      reason: "Dental Check-up",
      date: "2023-10-06",
      status: true, // Completed
      completed: true,
      description:
        "Six-month dental check-up. The patient received a thorough dental examination, including cleaning, X-rays, and an evaluation of oral health. Recommendations for future dental care were provided.",
    },
    {
      id: 7,
      name: "Eve Foster",
      reason: "Vaccination",
      date: "2023-10-07",
      status: true, // Scheduled
      completed: false,
      description:
        "Annual flu vaccination. The patient will receive the flu vaccine to protect against the most common strains of the influenza virus for the current season.",
    },
    {
      id: 8,
      name: "Frank Green",
      reason: "Physical Therapy",
      date: "2023-10-08",
      status: true, // Scheduled
      completed: false,
      description:
        "Physical therapy session for back pain. The patient is undergoing treatment for chronic back pain and will participate in exercises and treatments to improve mobility and reduce pain.",
    },
    {
      id: 9,
      name: "Grace Hall",
      reason: "Eye Examination",
      date: "2023-10-09",
      status: true, // Scheduled
      completed: false,
      description:
        "Routine eye examination. The patient will have a comprehensive eye exam to check for vision problems and eye diseases. Prescription for glasses or contact lenses may be updated.",
    },
    {
      id: 10,
      name: "Henry Irving",
      reason: "Nutrition Consultation",
      date: "2023-10-10",
      status: true, // Scheduled
      completed: false,
      description:
        "Consultation with a nutritionist. The patient will discuss dietary habits and receive personalized nutrition advice to improve overall health and manage weight.",
    },
    {
      id: 11,
      name: "Ivy Johnson",
      reason: "Skin Check",
      date: "2023-10-11",
      status: true, // Scheduled
      completed: false,
      description:
        "Annual skin check for moles and other skin abnormalities. The patient will undergo a thorough examination to detect any early signs of skin cancer or other skin conditions.",
    },
    {
      id: 12,
      name: "Jack King",
      reason: "Cardiology Consultation",
      date: "2023-10-12",
      status: true, // Scheduled
      completed: false,
      description:
        "Consultation with a cardiologist. The patient has a history of heart disease and will discuss current symptoms, undergo tests, and receive recommendations for ongoing care.",
    },
  ],
};
