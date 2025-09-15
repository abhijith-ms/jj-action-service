import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "Lisbon",
    service: "Electrical Services",
    rating: 5,
    text: "JJ Action Services saved the day when our electrical system failed. Professional, quick, and reasonably priced. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    name: "João Santos",
    location: "Porto",
    service: "Plumbing Services",
    rating: 5,
    text: "Excellent plumbing work! They fixed our leak quickly and explained everything clearly. Very professional team.",
    date: "1 month ago"
  },
  {
    name: "Ana Costa",
    location: "Braga",
    service: "Home Maintenance",
    rating: 5,
    text: "Regular maintenance service has kept our home in perfect condition. Reliable and trustworthy professionals.",
    date: "3 weeks ago"
  },
  {
    name: "Carlos Ferreira",
    location: "Coimbra",
    service: "Automotive Repair",
    rating: 5,
    text: "Great car repair service! Fixed my engine problem efficiently and at a fair price. Will definitely use again.",
    date: "1 week ago"
  },
  {
    name: "Isabel Rodrigues",
    location: "Lisbon",
    service: "Carpentry Services",
    rating: 5,
    text: "Beautiful custom furniture work! The craftsmanship is excellent and they completed the project on time.",
    date: "2 months ago"
  },
  {
    name: "Pedro Oliveira",
    location: "Porto",
    service: "Emergency Services",
    rating: 5,
    text: "Called them for an emergency repair at midnight. They came quickly and solved the problem professionally. Amazing service!",
    date: "1 month ago"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg font-body text-cool-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            across Portugal have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-light-gray rounded-lg p-6 border border-cool-gray/10 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/20" />
              </div>
              
              <p className="font-body text-cool-gray text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-cool-gray/10 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold font-heading text-navy text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-body text-cool-gray">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                  <span className="text-xs font-body text-cool-gray">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-navy rounded-lg p-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold font-heading text-primary mb-2">500+</div>
              <div className="text-sm font-body text-cool-gray">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-heading text-emerald mb-2">4.9/5</div>
              <div className="text-sm font-body text-cool-gray">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-heading text-terracotta mb-2">24/7</div>
              <div className="text-sm font-body text-cool-gray">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}