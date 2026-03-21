import { useLanguage } from '@/lib/LanguageContext';
import blogRoadtrip from '@/assets/blog-roadtrip.jpg';
import blogWinter from '@/assets/blog-winter.jpg';
import blogTrouble from '@/assets/blog-troubleshooting.jpg';

const blogs = [
  { img: blogRoadtrip, tag: 'Tips', date: 'Aug 5, 2025', title: 'Ultimate Checklist Before Taking a Long Road Trip' },
  { img: blogWinter, tag: 'Maintenance', date: 'Jun 27, 2025', title: '10 Essential Car Maintenance Tips for Winter' },
  { img: blogTrouble, tag: 'Tips', date: 'Mar 2, 2025', title: "A Beginner's Guide to Basic Car Troubleshooting" },
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="section-heading">{t.blog.title}</h2>
        <p className="text-muted-foreground mt-4">{t.blog.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((b, i) => (
          <div key={i} className="group cursor-pointer animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="overflow-hidden rounded-lg mb-4">
              <img src={b.img} alt={b.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <span className="bg-muted px-2 py-0.5 rounded">{b.tag}</span>
              <span>{b.date}</span>
            </div>
            <p className="text-foreground font-semibold group-hover:text-primary transition-colors">{b.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
